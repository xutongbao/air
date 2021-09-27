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
    parameters {
        gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'BRANCH', type: 'PT_BRANCH'
    }
    stages {
        stage('Example') {
            steps {
                git branch: "${params.BRANCH}", url: 'git@github.com:xutongbao/air.git'
            }
        }
        stage('install') {
            steps {
                echo 'hello,world!'
                sh 'yarn -v'
                sh 'yarn'
            }
        }
        stage('Build') {
            steps {
                sh 'set -x'
                sh 'yarn build_jenkins'
                sh 'set +x'
            }
        }
        stage('server') {
            steps {
                sh 'yarn server'
            }
        }
    }
}