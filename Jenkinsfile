pipeline {
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            agent {
                docker {
                    image 'node:12'
                    args '-p 3002:3002'
                }
            }            
            steps {
                echo 'hello,world!'
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