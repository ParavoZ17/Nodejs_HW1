
import  fs from 'fs';


export function logMessage(message) {
  
  fs.appendFile('log.txt', message + '\n', (err) => {
    if (err) {
      console.error('Помилка при записі лога:', err);
    }
  });
}


