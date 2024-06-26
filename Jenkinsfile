pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Checkout repo') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/main']], 
                    extensions: [],
                    userRemoteConfigs: [[url: 'https://github.com/El-Mendez/jenkins-test']]
	        )
	    }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    docker build -t my-website -t my-website:"$(git rev-parse --short HEAD)" .
                    docker stop my-website-container || true
                    docker run --name my-website-container --rm --detach -p 8000:80 my-website:"$(git rev-parse --short HEAD)"
                '''
            }
        }
    }
    post {
	    always {
		    emailext body: """
		    <h1>The Build <a href="${env.BUILD_URL}">${env.JOB_NAME} #${env.BUILD_NUMBER}</a> has finished.</h1>
		    <a href="${env.BUILD_URL}pipeline-graph/">Checkout the current build status.</a>
		    """,
                        subject: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} - ${currentBuild.result}",
			from: "${env.EMAIL_RECIPIENT}",
			to: "${env.EMAIL_RECIPIENT}",
                        attachLog: true
	    }
    }
}
