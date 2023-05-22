up:
	echo "Setting up Database and application"
	docker-compose up --build -d

down:
	echo "Down Database and application"
	docker-compose down