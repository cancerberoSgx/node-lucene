import { Options, printHelp } from '..';

describe('index', () => {
  it('should printHelpFunction of its own config options interface', () => {
    const interface1 = 'src/__tests__/assets/interface1.ts'
    const config: Options = {
      input: interface1,
      interfaceName: 'Options',
      format: 'markdown'
    }
    let help = printHelp(config)
    expect(help).toContain('* `input`: (`string`) - mandatory - Path to the file containing the options')
    expect(help).toContain("* `format`: (`'markdown' | 'javascriptString'`) - optional - output format")
    // console.log(help);

    config.format = 'javascriptString'
    help = printHelp(config)
    // console.log(help);
  })
})
