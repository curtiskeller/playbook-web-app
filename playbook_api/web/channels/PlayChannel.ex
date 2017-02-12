defmodule PlaybookApi.PlayChannel do
	use Phoenix.Channel

	def join("play:" <> _play_id, _params, socket) do
        {:ok, socket}
    end

    def handle_in("update", %{"body" => body}, socket) do
    	#update genserver call -> broadcast updated state

        broadcast! socket, "update", %{body: body}
        {:noreply, socket}
    end
	
    def handle_out("update", payload, socket) do
        push socket, "update", payload
        {:noreply, socket}
    end
end