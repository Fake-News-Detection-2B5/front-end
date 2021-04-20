export default {
    pathJoin: (left, right) => {
        if(left.endsWith('/')) {
            if(right.startsWith('/')) {
                return left + right.substring(1);
            } else {
                return left + right;
            }
        } else {
            if(right.startsWith('/')) {
                return left + right;
            } else {
                return left + '/' + right;
            }
        }
    }
}