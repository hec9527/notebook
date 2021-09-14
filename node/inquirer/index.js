import inquirer from 'inquirer';

async function show() {
  const questiongs = [
    {
      type: 'input',
      name: 'name',
      message: '请输入用户名',
    },
    {
      type: 'password',
      name: 'passwd',
      message: '请输入密码',
    },
  ];

  //   console.log(await inquirer.prompt(questiongs));

  //   await inquirer.prompt({
  //     type: 'number',
  //     name: 'test',
  //     message: '请输入数字',
  //     suffix: '大于10小于100',
  //   });

  await inquirer.prompt({
    type: 'list',
    name: 'dinner',
    message: '请选择晚上吃什么',
    choices: ['鸡蛋', '牛奶', '面包', '面条'],
    loop: true,
  });

  //   await inquirer.prompt({
  //     type: 'checkbox',
  //     message: 'Select toppings',
  //     name: 'toppings',
  //     choices: [
  //       new inquirer.Separator(' = The Meats = '),
  //       { name: 'Pepperoni' },
  //       { name: 'Ham' },
  //       { name: 'Ground Meat' },
  //       { name: 'Bacon' },
  //       new inquirer.Separator(' = The Cheeses = '),
  //       { name: 'Mozzarella', checked: true },
  //       { name: 'Cheddar' },
  //       { name: 'Parmesan' },
  //       new inquirer.Separator(' = The usual ='),
  //       { name: 'Mushroom' },
  //       { name: 'Tomato' },
  //       new inquirer.Separator(' = The extras = '),
  //       { name: 'Pineapple' },
  //       { name: 'Olives', disabled: 'out of stock' },
  //       { name: 'Extra cheese' },
  //     ],
  //     validate(answer) {
  //       if (answer.length < 1) {
  //         return 'You must choose at least one topping.';
  //       }
  //       return true;
  //     },
  //   });

  await inquirer.prompt({
    type: 'confirm',
    name: 'delete',
    message: '确认删除文件?',
    default: 'y',
    validate: answer => {
      if (`${answer}`.toLowerCase() !== y) {
        console.log('nn');
      } else {
        console.log('yy');
      }
    },
  });
}

show();
