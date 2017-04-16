(ns figwheel.connect.dev (:require [figwheel.client] [figwheel.client.utils] [md-editor.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/md-editor.core.mount-root (apply js/md-editor.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'md-editor.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

