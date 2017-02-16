defmodule PlaybookApi.PlayChannel do
	use Phoenix.Channel
	alias DesignServices.{PlayDesign, PlayDesignSupervisor}

	def join("play:" <> play_id, _params, socket) do
		PlayDesignSupervisor.start_child(%{ :play_design_id => play_id })
        {:ok, socket}
    end

    def handle_in("update", %{"play_id" => play_design_id, "propName" => propName, "propValue" => propValue}, socket) do
        PlayDesign.update(play_design_id, propName, propValue)
        broadcast! socket, "update", %{:play_design_id => play_design_id, :propName => propName, :propValue => propValue}
        {:noreply, socket}
    end
	
    def handle_out("update", %{ :play_design_id => play_design_id, :propName => propName, :propValue => propValue } = payload, socket) do
        PlayDesign.update(play_design_id, propName, propValue)
        push socket, "update", payload
        {:noreply, socket}
    end
end