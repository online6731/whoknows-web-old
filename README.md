## Whoknows Web Client
Web client for whoknows written in angular.
Play at www.whoknows.ir


## How to deploy?
Setting up is simple, just follow these steps.

### Node :

1. Install node and npm and git:
```sh
apt install git node npm
```
2. Clone the repository:
```sh
git clone https://github.com/online6731/whoknows-web
```
3. Go to repository folder:
```sh
cd whoknows-web
```
4. Install dependencies:
```sh
npm install
npm install -g @angular/cli
```
5. Start server:
```sh
npm start
```

###  Docker :

1. Clone the repository:
```sh
git clone https://github.com/online6731/whoknows-web
```
2. Go to repository folder:
```sh
cd whoknows-web
```
3. Build image from dockerfile:
```sh
docker build -t whoknows-web
```
4. Run docker image:
```sh
docker run -it whoknows-web
```

