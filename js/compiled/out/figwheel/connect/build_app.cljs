(ns figwheel.connect.build-app (:require [fractals.core] [figwheel.client] [figwheel.client.utils] [cljs.user]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/fractals.core.reset (apply js/fractals.core.reset x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'fractals.core/reset' is missing"))), :build-id "app", :websocket-url "ws://localhost:3448/figwheel-ws"})

