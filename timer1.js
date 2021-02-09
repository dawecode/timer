const args = process.argv;
const simpleTimer = function(arg) {
  args.splice(0, 2);
  for (const elem of arg) {
    let interval = elem * 1000;
    if (args.length === 0) {
      break;
    } else if (!isNaN(elem) && elem >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, interval);
    }
  }
};

simpleTimer(args);