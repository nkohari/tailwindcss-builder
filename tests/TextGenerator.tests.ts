import { TextGenerator } from '../src/generators';
import { Colors, Tester } from './util';

const tester = new Tester(new TextGenerator());

describe('TextGenerator', () => {
  tester.expect({}, []);

  tester.expect({ text: { align: 'left' } }, ['text-left']);
  tester.expect({ text: { align: 'center' } }, ['text-center']);
  tester.expect({ text: { align: 'right' } }, ['text-right']);
  tester.expect({ text: { align: 'justify' } }, ['text-justify']);

  tester.expect({ text: { break: 'normal' } }, ['break-normal']);
  tester.expect({ text: { break: 'words' } }, ['break-words']);
  tester.expect({ text: { break: 'all' } }, ['break-all']);
  tester.expect({ text: { break: 'truncate' } }, ['truncate']);

  for (const color of Colors) {
    tester.expect({ text: { color } }, [`text-${color}`]);
  }

  tester.expect({ text: { font: 'sans' } }, ['font-sans']);
  tester.expect({ text: { font: 'serif' } }, ['font-serif']);
  tester.expect({ text: { font: 'mono' } }, ['font-mono']);

  tester.expect({ text: { decoration: 'underline' } }, ['underline']);
  tester.expect({ text: { decoration: 'line-through' } }, ['line-through']);
  tester.expect({ text: { decoration: 'no-underline' } }, ['no-underline']);

  tester.expect({ text: { leading: 'none' } }, ['leading-none']);
  tester.expect({ text: { leading: 'tight' } }, ['leading-tight']);
  tester.expect({ text: { leading: 'snug' } }, ['leading-snug']);
  tester.expect({ text: { leading: 'normal' } }, ['leading-normal']);
  tester.expect({ text: { leading: 'relaxed' } }, ['leading-relaxed']);
  tester.expect({ text: { leading: 'loose' } }, ['leading-loose']);

  tester.expect({ text: { size: 'xs' } }, ['text-xs']);
  tester.expect({ text: { size: 'sm' } }, ['text-sm']);
  tester.expect({ text: { size: 'base' } }, ['text-base']);
  tester.expect({ text: { size: 'lg' } }, ['text-lg']);
  tester.expect({ text: { size: 'xl' } }, ['text-xl']);
  tester.expect({ text: { size: '2xl' } }, ['text-2xl']);
  tester.expect({ text: { size: '3xl' } }, ['text-3xl']);
  tester.expect({ text: { size: '4xl' } }, ['text-4xl']);
  tester.expect({ text: { size: '5xl' } }, ['text-5xl']);
  tester.expect({ text: { size: '6xl' } }, ['text-6xl']);

  tester.expect({ text: { smoothing: 'antialiased' } }, ['antialiased']);
  tester.expect({ text: { smoothing: 'subpixel-antialiased' } }, ['subpixel-antialiased']);

  tester.expect({ text: { style: 'italic' } }, ['italic']);
  tester.expect({ text: { style: 'not-italic' } }, ['not-italic']);

  tester.expect({ text: { tracking: 'tighter' } }, ['tracking-tighter']);
  tester.expect({ text: { tracking: 'tight' } }, ['tracking-tight']);
  tester.expect({ text: { tracking: 'normal' } }, ['tracking-normal']);
  tester.expect({ text: { tracking: 'wide' } }, ['tracking-wide']);
  tester.expect({ text: { tracking: 'wider' } }, ['tracking-wider']);
  tester.expect({ text: { tracking: 'widest' } }, ['tracking-widest']);

  tester.expect({ text: { transform: 'uppercase' } }, ['uppercase']);
  tester.expect({ text: { transform: 'lowercase' } }, ['lowercase']);
  tester.expect({ text: { transform: 'capitalize' } }, ['capitalize']);
  tester.expect({ text: { transform: 'normal-case' } }, ['normal-case']);

  tester.expect({ text: { weight: 'hairline' } }, ['font-hairline']);
  tester.expect({ text: { weight: 'thin' } }, ['font-thin']);
  tester.expect({ text: { weight: 'light' } }, ['font-light']);
  tester.expect({ text: { weight: 'normal' } }, ['font-normal']);
  tester.expect({ text: { weight: 'medium' } }, ['font-medium']);
  tester.expect({ text: { weight: 'semibold' } }, ['font-semibold']);
  tester.expect({ text: { weight: 'bold' } }, ['font-bold']);
  tester.expect({ text: { weight: 'extrabold' } }, ['font-extrabold']);
  tester.expect({ text: { weight: 'black' } }, ['font-black']);

  tester.expect({ text: { whitespace: 'normal' } }, ['whitespace-normal']);
  tester.expect({ text: { whitespace: 'no-wrap' } }, ['whitespace-no-wrap']);
  tester.expect({ text: { whitespace: 'pre' } }, ['whitespace-pre']);
  tester.expect({ text: { whitespace: 'pre-line' } }, ['whitespace-pre-line']);
  tester.expect({ text: { whitespace: 'pre-wrap' } }, ['whitespace-pre-wrap']);

  tester.expect({ text: { size: 'xl', weight: 'black' } }, ['text-xl', 'font-black']);
});
