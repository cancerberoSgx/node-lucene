import { Options, printHelp } from '..';

describe('index', () => {
  describe('printHelp', () => {
    it('should print an interface jsdoc as help string', () => {
      const interface1 = 'src/__tests__/assets/interface1.ts'
      const config: Options = {
        input: interface1,
        interfaceName: 'Options',
        format: 'markdown'
      }
      let help = printHelp(config)
      expect(help).toContain('* `input` (`string`): mandatory - Path to the file containing the options')
      expect(help).toContain("* `format` (`'markdown' | 'javascriptString'`): optional - output format")
      // console.log(help);

      config.format = 'javascriptString'
      help = printHelp(config).trim()
      expect(help).toContain(`const helpText = \`Usag`)
      expect(help.endsWith('`')).toBe(true)
      // console.log(help);

      config.format = 'javascriptStringNoVar'
      help = printHelp(config).trim()
      expect(help).not.toContain(`const helpText = \`Usag`)
      expect(help.endsWith('`')).not.toBe(true)
      // console.log(help);

    })

    xit('should print complete hierarchy of interface', () => {
      const interface2 = 'src/__tests__/assets/interface2.ts'
      const config: Options = {
        input: interface2,
        interfaceName: 'MegaOptions',
        format: 'markdown'
      }
      let help = printHelp(config)
      // expect(help).toContain('* `input`: (`string`) - mandatory - Path to the file containing the options')
      // expect(help).toContain("* `format`: (`'markdown' | 'javascriptString'`) - optional - output format")
      console.log(help);

      config.format = 'javascriptString'
      help = printHelp(config)
      console.log(help);
    })
  })
})
