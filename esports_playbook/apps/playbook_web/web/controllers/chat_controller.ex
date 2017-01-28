defmodule PlaybookWeb.ChatController do

    use PlaybookWeb.Web, :controller

    def index(conn, _params) do
        render conn, "lobby.html"        
    end    
end
