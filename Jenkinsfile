pipeline {
    agent any
    stages {

		stage('Probando stage') {
            steps {
                sh '''
					bash -c ls node_modules
					
				'''
            }
        }		
		stage('construyendo contenedores') {
            steps {
                sh 'docker-compose up --build -d'
            }
        }
    }
}