defmodule DesignServicesTest do
  use ExUnit.Case
  doctest DesignServices

  test "the truth" do
    assert 1 + 1 == 2
  end

  test "initializes supervision tree" do
  	base_pid = Process.whereis(DesignServices)
  	chat_pid = Process.whereis(DesignServices.PlayDesignSupervisor)
    registry_pid = Process.whereis(DesignServices.PlayDesignSupervisor)
  	assert base_pid != nil
  	assert chat_pid != nil
    assert registry_pid != nil
  end
end
