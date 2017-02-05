defmodule DesignServicesTest do
  use ExUnit.Case
  doctest DesignServices

  test "the truth" do
    assert 1 + 1 == 2
  end

  test "initializes supervision tree" do
  	basepid = Process.whereis(DesignServices)
  	chatpid = Process.whereis(DesignServices.ChatSupervisor)
  	assert basepid != nil
  	assert chatpid != nil
  end
end
