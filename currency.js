const readline = require('readline');

// Фіксовані курси валют
const rates = {
  USD: { EUR: 0.85, UAH: 28 },
  EUR: { USD: 1.18, UAH: 33 },
  UAH: { USD: 0.036, EUR: 0.030 },
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введіть валюту, з якої конвертуємо (наприклад, USD, EUR, UAH): ", function(from) {
  rl.question("Введіть валюту, у яку конвертуємо (наприклад, USD, EUR, UAH): ", function(to) {
    rl.question("Введіть суму: ", function(amount) {
      amount = parseFloat(amount);
      if (isNaN(amount)) {
        console.log("Невірно введена сума.");
        rl.close();
        return;
      }
      
      // Перевірка наявності курсу конвертації
      if (!rates[from] || !rates[from][to]) {
        console.log("Конвертація для вказаної пари валют недоступна.");
        rl.close();
        return;
      }
      
      const result = amount * rates[from][to];
      console.log(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
      rl.close();
    });
  });
});
