export interface User {
    attributes: {
        email: string
    }
}

export function setCurrentUser(user: any): void {
    window.localStorage.setItem('currentUser', JSON.stringify(user))
}

export function getCurrentUser(): User | null {
    const currentUser = window.localStorage.getItem('currentUser')
    if (currentUser) {
        return JSON.parse(currentUser) as User
    } else {
        return null
    }
}

export function getUserEmail(): string | null {
    const currentUser = getCurrentUser()
    if (currentUser !== null) {
        return currentUser?.attributes.email
    } else {
        return null
    }
}
