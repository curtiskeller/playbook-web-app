# playbook-web-app



## How to Run
1. Install Elixir and Phoenix
	* choco install elixir
	* mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez
2. Start Front-End
	* navigate to playbook_website
	* npm install
	* npm run dev
	* starts at port 8080
3. Start Back-End
	* navigate to playbook_api
	* mix deps get
	* mix phoenix.server  (to start in "debug" mode: iex -S mix phoenix.server)
	* starts ay port 4000
