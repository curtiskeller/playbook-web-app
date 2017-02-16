defmodule DesignServices.PlayDesign do
	use GenServer

	# Interface Functions

	def start_link(%{ :play_design_id => play_design_id} = state) do
		name = via_tuple(play_design_id)
		GenServer.start_link(__MODULE__, state, name: name)
	end

	# Creates a via tuple to lookup/create from Registry
	defp via_tuple(play_design_id) do
    	{:via, Registry, {:design_process_registry, play_design_id}}
  	end

	def get_play(play_design_id) do
		via_tuple(play_design_id)
		|> GenServer.call(:get_play)
	end

	def update(play_design_id, key, value) do
		via_tuple(play_design_id)
		|> GenServer.call({ :update, key, value})		
	end

	def update_simple(play_design_id, new_state) do
		via_tuple(play_design_id)
		|> GenServer.call({ :update_simple, new_state })
	end

	# Callbacks

	def init(state) do
		{ :ok, state }
	end
	
	def handle_call(:get_play, _from, state) do
		{ :reply, state, state }
	end

	def handle_call({ :update, key, value}, _from, state) do
		new_state = Map.put(state, key, value)
		{ :reply, new_state, new_state}
	end

	def handle_call({ :update_simple, new_state }, _from, _state) do
		{ :reply, new_state, new_state}
	end
end