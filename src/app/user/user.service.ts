export class UserService {
  user = {
    name: 'Max'
  };

  getTitle():string{
    return "My Title";
  }

  // delay 1,5 seconds
  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromise;
  }
}
