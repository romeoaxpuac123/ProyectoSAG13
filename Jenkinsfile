pipeline {
    agent any
    stages {

		stage('Probando Repositorio') {
            steps {
                sh '''
					bash -c ls node_modules
					
				'''
            }
        }		
		stage('Construyendo Contenedores') {
            steps {
                sh 'docker-compose up --build -d'
            }
        }
		stage('Realizando Pruebas Unitarias') {
            steps {
                sh 'cd Pruebas; npm install; npm test'
            }
        }
		
    }
}
