pipeline {
    agent {
        docker {
            image 'node:12'
            args '-p 3002:3002'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('install') {
            steps {
                echo '开始'
                sh 'yarn -v'
                sh 'yarn'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn build_jenkins'
            }
        }
        stage('server') {
            steps {
                sh 'yarn server'
            }
        }
    }
}