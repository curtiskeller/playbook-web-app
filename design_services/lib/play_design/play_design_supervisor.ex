defmodule DesignServices.PlayDesignSupervisor do
  use Supervisor
  
  def start_link do
	  Supervisor.start_link(__MODULE__, [], name: __MODULE__)
  end

  def start_child(state) do
  	Supervisor.start_child(__MODULE__, [state])	
  end

  def init(_args) do
    children = [
		worker(DesignServices.PlayDesign, [], restart: :transient)
	]

	supervise(children, strategy: :simple_one_for_one)
  end
end