import config from '../config'

const validatorEnv = (config: Record<string, string>): void => {
  const valuesVarEnv = Object.values(config)
  const isUndefinedOrEmpty = valuesVarEnv.some(keyVal => keyVal === '' || keyVal === undefined)
  if (isUndefinedOrEmpty) throw new Error('Server cannot be initialized because it needs an environment variable.')
}

export default validatorEnv