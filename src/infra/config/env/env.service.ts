import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { EnvironmentVariables } from './env.validation'

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<EnvironmentVariables, true>) {}

  get<T extends keyof EnvironmentVariables>(key: T): EnvironmentVariables[T] {
    return this.configService.get(key, { infer: true })
  }
}
