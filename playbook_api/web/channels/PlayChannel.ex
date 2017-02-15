defmodule PlaybookApi.PlayChannel do
	use Phoenix.Channel
	alias DesignServices.{PlayDesign, PlayDesignSupervisor}

	def join("play:" <> play_id, _params, socket) do
		PlayDesignSupervisor.start_child(%{ :play_design_id => play_id })
		#bind and register pid to registry?
        {:ok, socket}
    end

    def handle_in("update", %{"body" => body}, socket) do
    	#PlayDesign.update(body)

        broadcast! socket, "update", %{body: body}
        {:noreply, socket}
    end
	
    def handle_out("update", payload, socket) do
        push socket, "update", payload
        {:noreply, socket}
    end
end