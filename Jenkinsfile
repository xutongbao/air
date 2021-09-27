pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            input {
                message "Should we continue?"
                ok "Yes, we should."
                submitter "alice,bob"
                parameters {
                    string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
                }
            }
            agent {
                docker {
                    image 'node:12'
                    args '-p 3002:3002'
                }
            }            
            steps {
                echo 'hello,world!'
                echo "Hello, ${PERSON}, nice to meet you."
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