import validatorEnv from '../utils/validatorEnv'



describe('validatorEnv function', () => {
  it('should return an error and a specific message', () => {
    const configMock = {
      dbNameMock: '',
      dbUser: 'SAMUsak',
      port: "8000"
    }
    const messageErrMock = 'Server cannot be initialized because it needs an environment variable.'

    const expectedResult = new Error(messageErrMock)
    expect(() => { validatorEnv(configMock) }).toThrow(expectedResult)
  })

  it('should return an error and a specific message', () => {
    const configMock = {
      dbNameMock: undefined!,
      dbUser: 'SAMUsak',
      port: "8000"
    }
    const messageErrMock = 'Server cannot be initialized because it needs an environment variable.'

    const expectedResult = new Error(messageErrMock)
    expect(() => { validatorEnv(configMock) }).toThrow(expectedResult)
  })

  it('should return undefined or null', () => {
    const configMock = {
      dbNameMock: 'SMAEsa',
      dbUser: 'SAMUsak',
      port: "8000"
    }

    let expectResult: undefined | null;
    expect(validatorEnv(configMock)).toBe(expectResult)
  })
})
