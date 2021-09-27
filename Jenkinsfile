pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            input {
                message "请设置端口号?"
                ok "确定"
                parameters {
                    string(name: 'PORT', defaultValue: '3002', description: '设置docker容器对外保留的端口号?')
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