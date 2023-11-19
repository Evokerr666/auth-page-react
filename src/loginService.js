export const login = async (data, callback, errorCallback) => {
    return new Promise((res, rej) => {
      const email = data.get('email');
      const pas = data.get('password');
      if(email === 'user@mail.ru' && pas === '12345') {
        setTimeout(() => {
          res(1)
        }, 1500);
      } else {
        setTimeout(() => {
          rej('Ошибка аутентификации')
        }, 1500);
      }
    })
    .then(() => callback())
    .catch((e) => errorCallback(e))
  }