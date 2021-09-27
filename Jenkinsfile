pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            input {
                message "Please set the port number?"
                ok "Ok"
                parameters {
                    string(name: 'PORT', defaultValue: '3002', description: ' Set the expose port number of docker container?')
                }
            }
            agent {
                docker {
                    image 'node:12'
                    args "-p ${PORT}:3002"
                }
            }            
            steps {
                echo 'hello,world!'
                echo "PORT: ${PORT}"
                sh 'yarn -v'
                sh 'yarn'
                sh 'set -x'
                sh 'yarn build_jenkins'
                sh 'set +x'
                sh 'yarn server'
            }
        }
    }
}