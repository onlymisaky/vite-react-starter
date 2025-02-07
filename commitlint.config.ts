import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

/**
 * @link https://commitlint.js.org/
 */
const Configuration: UserConfig = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['chore', 'build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
};

export default Configuration;
