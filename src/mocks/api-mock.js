const texts = [
    {
        data: "IyMgTWlyZXIKIyMgQWRhaWx0b24KIyMgQW5kcukKIyMgTWF5a2UKIyMgQW50aG9ueQoKIVtUZXJtaW5hbF0oaHR0cHM6Ly9tZWRpYS1ncnUyLTEuY2RuLndoYXRzYXBwLm5ldC92L3Q2MS4yNDY5NC0yNC8zMDY3ODI3ODNfMzI1MjIxMDk1NTAzNDgwOF83ODM1MDcyNDM5ODU0MzYxOTY3X24uanBnP2NjYj0xMS00Jm9oPTAxX0FkUV9wVm8zMHJfTlB4d3J0OElLSVVVcGxTbVlOdFNDemZzU3Y2S3AwX0F0SGcmb2U9NjU5MkVERjImX25jX3NpZD1lNmVkNmMmX25jX2NhdD0xMDgp"
    },
    {
        data: "IyMgTWlyZXIKTyBtaXJlciBwb2RlIHNlciBkdXJvIGFzIHZlemVzLCBtYXMgbyBj82RpZ28gcXVlIHRlbW9zIHPjbyBvcyBhbWlnb3MgcXVlIGZhemVtb3Mgbm8gY2FtaW5obyE="
    },
]

export function callMockedApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const sucesso = true;
          if (sucesso) {
            resolve(texts[1]);
          } else {
            reject('A operação falhou!');
          }
        }, 2000);
      });
}

