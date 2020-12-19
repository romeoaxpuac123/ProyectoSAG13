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
		stage('Ansible') {
           steps {
                sh 'cd Ansible;ansible-playbook ansibleConfigurations.yml'
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
		stage('Realizando Pruebas funcionales') {
            steps {
                sh 'cd Pruebas_Funcionales; npm install; npm test'
            }
        }
		
    }
}
