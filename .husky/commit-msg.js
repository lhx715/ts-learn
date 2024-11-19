import chalk from 'chalk'; // 使用import而非require
import { execSync } from 'child_process';

try {
    // 执行 commitlint
    execSync('npx --no -- commitlint --edit', { stdio: 'inherit' });
} catch (error) {
    console.log(chalk.bgRed.white.bold(' 提交失败'));
    console.log(chalk.red('------------------------------------------'));
    console.log(chalk.green('Type: feat, fix, docs, style, refactor, chore'));
    console.log(chalk.blue('Message should follow: type(scope): description'));
    console.log(chalk.magenta('Example: feat(auth): add login validation'));
    console.log(chalk.yellow('Please check your commit message.'));
    process.exit(1); // 强制退出
}
