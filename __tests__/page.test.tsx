import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import Home from '@/app/page'

describe("Page d'accueil", () => {
  describe('Rendu général', () => {
    it('la page se rend sans erreur', () => {
      render(<Home />)

      expect(document.body).toBeInTheDocument()
    })
  })

  describe('Bouton Voir le CV complet', () => {
    it('affiche le bouton avec le bon texte', () => {
      render(<Home />)

      const cvButton = screen.getByRole('link', { name: /voir le cv complet/i })

      expect(cvButton).toBeInTheDocument()
    })

    it('le bouton pointe vers le fichier CV', () => {
      render(<Home />)

      const cvButton = screen.getByRole('link', { name: /voir le cv complet/i })

      expect(cvButton).toHaveAttribute('href', expect.stringContaining('cv'))
    })

    it("le bouton s'ouvre dans un nouvel onglet", () => {
      render(<Home />)

      const cvButton = screen.getByRole('link', { name: /voir le cv complet/i })

      expect(cvButton).toHaveAttribute('target', '_blank')
      expect(cvButton).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })
})
