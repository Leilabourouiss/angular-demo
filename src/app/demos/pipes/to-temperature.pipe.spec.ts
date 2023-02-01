import { ToTemperature } from './to-temperature.pipe';

describe('ToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToTemperature();
    expect(pipe).toBeTruthy();
  });
});
