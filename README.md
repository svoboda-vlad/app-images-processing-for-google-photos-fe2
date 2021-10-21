# Images Processing For Google Photos - Front End Angular (app-images-processing-for-google-photos-fe)

GitHub Pages: [https://svoboda-vlad.github.io/app-images-processing-for-google-photos-fe](https://svoboda-vlad.github.io/app-images-processing-for-google-photos-fe)

## Running the project

```
ng serve --host 0.0.0.0
```

Local development: [http://localhost:4200](http://localhost:4200)

## Development environment
## Node.js + Angular CLI installation

```
sudo curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g @angular/cli
```

## Creating a new Angular project

```
ng new images-processing-for-google-photos --routing --style scss --prefix ipfgp
cd images-processing-for-google-photos
```

## GitHub Pages deployment
script: bash ghpagesdeploy.sh

```
ng build --output-path docs --base-href "https://svoboda-vlad.github.io/app-images-processing-for-google-photos-fe/"
cp docs/index.html docs/404.html
git add .
git commit -m "GitHub pages deployment"
git push origin master
```
