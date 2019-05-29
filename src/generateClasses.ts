import { Generator } from './generators/Generator';
import {
  Config,
  ConfigVariant,
  ConfigWithOptionalInteractionVariants,
  Interaction,
  ResponsiveConfig,
  ViewportSize,
} from './config';

function isResponsiveConfig(config: Config): config is ResponsiveConfig {
  if (typeof config !== 'object') return false;
  const responsive = config as ResponsiveConfig;
  return !!responsive.sm || !!responsive.md || !!responsive.lg || !!responsive.xl;
}

const INTERACTION_VARIANTS: [Interaction, string][] = [
  ['active', 'active'],
  ['focus', 'focus'],
  ['focusWithin', 'focus-within'],
  ['groupHover', 'group-hover'],
  ['hover', 'hover'],
];

const RESPONSIVE_SIZE_VARIANTS: [ViewportSize, string][] = [['sm', 'sm'], ['md', 'md'], ['lg', 'lg'], ['xl', 'xl']];

function* generateClassesForVariant(generators: Generator[], config: ConfigVariant | undefined) {
  if (!config) return;
  for (const generator of generators) {
    yield* generator.getClasses(config);
  }
}

function* generateClassesForAllVariants(
  generators: Generator[],
  config: ConfigWithOptionalInteractionVariants | undefined
) {
  if (!config) return;

  // Generate base CSS classes.
  yield* generateClassesForVariant(generators, config);

  // If any interaction variants (eg. hover) are specified, generate CSS classes for them as well.
  for (const [variant, modifier] of INTERACTION_VARIANTS) {
    for (const variantClass of generateClassesForVariant(generators, config[variant])) {
      yield `${modifier}:${variantClass}`;
    }
  }
}

export function* generateClasses(generators: Generator[], config: Config) {
  if (!isResponsiveConfig(config)) {
    // If the config doesn't specify responsive sizes, just generate one set of CSS classes.
    yield* generateClassesForAllVariants(generators, config);
  } else {
    // Generate prefixed CSS classes for each responsive size specified in the config.
    for (const [variant, modifier] of RESPONSIVE_SIZE_VARIANTS) {
      for (const sizeClass of generateClassesForAllVariants(generators, config[variant])) {
        yield `${modifier}:${sizeClass}`;
      }
    }
  }
}
