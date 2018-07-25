import { Options, printHelp } from '..';

describe('index', () => {
  it('should printHelpFunction of its own config options interface', () => {
    const config: Options = {
      fileWithInterface: 'src/index.ts',
      interfaceName: 'Options'
    }
    const help = printHelp(config)
    expect(help).toContain(' * fileWithInterface:')
    expect(help).toContain(' * interfaceName:')
    console.log(help);
  })
})
