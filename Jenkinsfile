pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    stages {
        stage('build') {         
            steps {
                bat "echo ${branch}"
                bat "echo ${ITEM_FULL_NAME}"
                bat 'yarn -v'
                //bat './build.bat'
            }
        }
    }
}