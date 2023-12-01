export function updateSignal(id, data) {
    const node = nodes.get(id);

    for (const [key, val] of Object.entries(data)) {
        if (node[key] instanceof SignalParam) {
            node[key].value = val;
        } else {
            node[key] = val;
        }
    }
}

export function removeSignal(id) {
    const node = nodes.get(id);

    node.disconnect();
    node.stop?.();

    nodes.delete(id);
}