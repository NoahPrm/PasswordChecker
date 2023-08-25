import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  console.clear();
  console.log(chalk.blue.bold(`
____                                     _  ____ _               _             
|  _ \\ __ _ ___ _____      _____  _ __ __| |/ ___| |__   ___  ___| | _____ _ __ 
| |_) / _\` / __/ __\\ \\ /\\ / / _ \\| '__/ _\` | |   | '_ \\ / _ \\/ __| |/ / _ \\ '__|
|  __/ (_| \\__ \\__ \\\\ V  V / (_) | | | (_| | |___| | | |  __/ (__|   <  __/ |   
|_|   \\__,_|___/___/ \\_/\\_/ \\___/|_|  \\__,_|\\____|_| |_|\\___|\\___|_|\\_\\___|_|   
                                                                                                                                     
  `));

  rl.question(chalk.blue.bold('Please enter the Password to check\n > '), (mdp) => {
    console.log('\n');
    let n = 0;
    const start_time = Date.now();

    while (true) {
      const password = Array.from({ length: mdp.length }, () => String(Math.floor(Math.random() * 10))).join('');

      if (password === mdp) {
        n++;
        const time_stop = Date.now();
        console.log(chalk.yellow(` ${n} ${chalk.green(' | ')}${chalk.green('Valid')} ${chalk.green(' |')}${chalk.green(` ${mdp}`)}`));
        console.log(chalk.magenta(` Found in${chalk.cyan(` ${Math.round((time_stop - start_time) / 1000)} seconds`)}`));
        rl.close();
        return;
      } else {
        n++;
        process.stdout.write(chalk.yellow(` ${n} ${chalk.red(' | ')}${chalk.red('Invalid')} ${chalk.red(' |')}${chalk.red(` ${password}`)}`));
        process.stdout.write('\r');
      }
    }
  });
}

main();