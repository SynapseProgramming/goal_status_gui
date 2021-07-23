# goal_status_gui
A package which displays the current status of the robot. 

## Installation Guide
1. To install nodejs, copy and paste and run the following command to install the node version manager (nvm) 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
2. Next, we can run (nvm list-remote) to list all of the possible nodejs version which we can use.
```
nvm list-remote
```
3. We would want to install V12.22.1 which is the latest LTS version of nodejs 
which is compatible with the ros2 nodejs library.<br>
```
nvm install v12.22.1
```
4. We can verify its installation by running (nvm list)
```
nvm list
```

5. Next, git clone this package into a folder by running:
```
git clone https://github.com/SynapseProgramming/goal_status_gui.git
```
6. Next, enter the goal_status_gui directory and run the following command:
```
npm install
```
7. Next, run the following command to rebuild the package with electron.
```
./node_modules/.bin/electron-rebuild 
```
### Usage
In the goal_status gui package, run the following command:
```
npm start
```
