###Setup MAC OS for React Native
**Install HomeBrew
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
**Install watchman
▶ brew install watchman
**Install react CLI
▶ npm install -g react-native-cli

Setup Bash or ZSH
▶ sudo vim $HOME/.bash_profile
▶ sudo vim ~/.zshrc
export JAVA_HOME =/Library/Java/JavaVirtualMachines/jdk13/Contents/Home
export ANDROID_HOME=/Users/<you user>/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/tools/bin:$PATH
export PATH=$ANDROID_HOME/build-tools:$PATH
export PATH=$ANDROID_HOME/emulator:$PATH
export PATH=$PATH:/Users/edudeveloper/Documents/gradle-4.10.2/bin/
export PATH

##Create Project
▶ react-native init todolist
▶ npm start
▶ react-native run-android
