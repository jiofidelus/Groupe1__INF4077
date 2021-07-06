pipeline {
    agent any

    stages {
        
        stage('Cloning Repository') {
            steps {
                echo 'cloning Repository... . .. '
                // sh"""echo 12345 | sudo -S git pull"""
            }
        }
       
        stage('Building') {
            steps {
                script{
                    echo 'Building Code ... . .. '
                sh """cd '/var/lib/jenkins/workspace/jenkins test'"""
                sh """pwd"""
                sh """
                pip3 install -r requirements.txt
                """
                }
                    
            }
        }
                
                
                
                
            
        
        stage('Testing') {
            steps {
                echo 'Testing code ... . ....'
                sh """python manage.py test"""
                echo 'Test Finished .......'
                
            }
        }
        stage('Deploying') {
            steps {
                echo 'Deploying code ......'
                agent { docker { image 'maven:3.3.3' } }
                sh """python manage.py runserver"""
                echo """Performing system checks...
                    System check identified no issues (0 silenced).
                    Django version 3.1.3, using settings 'Diabetes_Surveillance_Project.settings'
                    Starting Production server at http://127.0.0.1:8000/
                    Quit the server with CONTROL-C.
                    """
            }
        }
    }
    
}
