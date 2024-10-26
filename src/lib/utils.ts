function syncObjects(original: Record<string, any>, updated: Record<string, any>) {
    for (const key in original) {
        if (updated.hasOwnProperty(key)) {
            if (original[key] !== updated[key]) {
                original[key] = updated[key];
            }
        } else {
            updated[key] = original[key];
        }
    }
    return updated;
}