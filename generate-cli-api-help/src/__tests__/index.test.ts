import { Options, printHelp } from '..';

describe('index', () => {
  it('should printHelpFunction of its own config options interface', () => {
    const config: Options = {
      fileWithInterface: 'src/index.ts',
      interfaceName: 'Options'
    }
    const help = printHelp(config)
    expect(help).toContain('* `fileWithInterface`: (`string`) - mandatory - Path to the file containing the options')
    expect(help).toContain("* `format`: (`'markdown' | 'javascriptString'`) - optional - output format")
  })
})
